"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";
import { TRANSACTION_CATEGORY_LABELS, TRANSACTION_PAYMETHOD_LABELS } from "@/app/_constants/transaction";
import EditTransactionButton from "../_components/edit-transaction-button";
import DeleteTransactionButton from "../_components/delete-transaction-button";

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
    cell: ({ row: { original: t } }) => TRANSACTION_CATEGORY_LABELS[t.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
    cell: ({ row: { original: t } }) =>
      TRANSACTION_PAYMETHOD_LABELS[t.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: t } }) =>
      new Date(t.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: t } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(t.amount)),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({row: {original: transaction}}) => {
      return (
        <div className="space-x-1">
          <EditTransactionButton transaction={transaction} />

          {/* botao de excluir */}
          <DeleteTransactionButton id={transaction.id} />
        </div>
      );
    },
  },
];
