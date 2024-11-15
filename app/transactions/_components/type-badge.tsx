import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary font-bold" size={10} />
        Depósito
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="text-danger bg-danger hover:bg-danger bg-opacity-10 font-bold hover:bg-opacity-10">
        <CircleIcon className="fill-danger mr-2" size={10} />
        Despesa
      </Badge>
    );
  }

  return (
    <Badge className="bg-muted text-white hover:bg-muted">
      <CircleIcon className="mr-2 fill-white font-bold" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
