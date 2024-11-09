import { TransactionCategory, TransactionPaymenyMethod } from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERNAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMETHOD_LABELS = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Depósito Bancário",
  CASH: "Dinheiro",
  PIX: "PIX",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_LABELS = {
  EXPENSE: "Despesa",
  DEPOSIT: "Depósito",
  INVESTMENT: "Investimento",
};

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymenyMethod.BANK_TRANSFER,
    label: TRANSACTION_PAYMETHOD_LABELS[TransactionPaymenyMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymenyMethod.BANK_SLIP,
    label: TRANSACTION_PAYMETHOD_LABELS[TransactionPaymenyMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymenyMethod.CASH,
    label: TRANSACTION_PAYMETHOD_LABELS[TransactionPaymenyMethod.CASH],
  },
  {
    value: TransactionPaymenyMethod.CREDIT_CARD,
    label: TRANSACTION_PAYMETHOD_LABELS[TransactionPaymenyMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymenyMethod.DEBIT_CARD,
    label: TRANSACTION_PAYMETHOD_LABELS[TransactionPaymenyMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymenyMethod.OTHER,
    label: TRANSACTION_PAYMETHOD_LABELS[TransactionPaymenyMethod.OTHER],
  },
  {
    value: TransactionPaymenyMethod.PIX,
    label: TRANSACTION_PAYMETHOD_LABELS[TransactionPaymenyMethod.PIX],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERNAINMENT,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERNAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
  },
];
