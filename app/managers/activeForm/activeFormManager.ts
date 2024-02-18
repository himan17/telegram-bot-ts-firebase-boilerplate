import { ActiveForm } from "./activeForm";

export class ActiveFormManager {
  private activeForms: Map<string, ActiveForm> = new Map<string, ActiveForm>();

  constructor() {}

  getUserActiveForm(userId: string) {
    return this.activeForms.get(userId);
  }

  createUserActiveForm(userId: string, formType: string) {
    const form = new ActiveForm(userId, formType);

    this.activeForms.set(userId, form);
    return form;
  }

  deleteUserActiveForm(userId: string) {
    this.activeForms.delete(userId);
  }
}

export const formManager = new ActiveFormManager();
