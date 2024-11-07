"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({row: {original: t}}) => {
      switch (t.category) {
        case "HOUSING":
          return "Moradia"
      
        case "TRANSPORTATION":
          return "Moradia"

        case "FOOD":
          return "Alimentação"

        case "ENTERNAINMENT":
          return "Lazer"

        case "HEALTH":
          return "Saúde"

        case "UTILITY":
          return "Utilidades"

        case "SALARY":
          return "Salário"

        case "EDUCATION":
          return "Educação"

        default: 
          return "Outros";
      }
    }
  },
  {
    accessorKey: "paymenyMethod",
    header: "Método de pagamento",
    cell: ({row: {original: t}}) => {
      switch (t.paymenyMethod) {
        case "CREDIT_CARD":
          return "Cartão de Crédito"
      
        case "DEBIT_CARD":
          return "Cartão de Débito"

        case "BANK_TRANSFER":
          return "Transferência Bancária"

        case "BANK_SLIP":
          return "Depósito Bancário"

        case "CASH":
          return "Dinheiro"

        case "PIX":
          return "PIX"

        default: 
          return "Outros";
      }
    }
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
