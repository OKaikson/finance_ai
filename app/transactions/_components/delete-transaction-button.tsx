"use client";

import { DeleteTransaction } from "@/app/_actions/delete-transaction";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { useToast } from "@/app/_hooks/use-toast";

import { TrashIcon } from "lucide-react";

interface thisProps {
  id: string;
}

const DeleteTransactionButton = ({ id }: thisProps) => {
  const { toast } = useToast();

  const doDelete = async (id: string) => {
    await DeleteTransaction(id);
    console.log(id);
    toast({
      description: "Registro deletado com sucesso!",
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <TrashIcon className="text-red-500" />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deletar transação</DialogTitle>
            <DialogDescription>Deseja deletar a transação?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Não
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <Button type="button" onClick={() => doDelete(id)}>
                Sim
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteTransactionButton;
