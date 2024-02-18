interface FormStep {
  label: string;
}

const formSteps: Record<string, FormStep[]> = {
  login_form_example: [
    {
      label: "Enter your email",
    },
    {
      label: "Enter your password",
    },
    {
      label: "Confirmation",
    },
  ],
};

export class ActiveForm {
  userId: string;
  formType: string;
  step: number; // starts from 0
  lastStep: number;
  formData: Record<string, any>; // Adjust the type based on your actual data structure
  formSteps: FormStep[];

  constructor(userId: string, formType: string) {
    this.userId = userId;
    this.formType = formType;

    this.step = 0;
    this.lastStep = formSteps[formType].length;
    this.formSteps = formSteps[formType];
    this.formData = {};
  }

  setFormData(data: Record<string, any>) {
    this.formData = { ...this.formData, ...data };
  }

  updateStep(newStep: number) {
    this.step = newStep;
  }
}
