"use client";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { Button } from "./ui/button";
import { ArrowDownUp } from "lucide-react";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button className="rounded-full font-bold" onClick={() => setDialogIsOpen(true)}>
          <ArrowDownUp />
          Adicionar transação
        </Button>
      <UpsertTransactionDialog isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen} />
    </>
    
  );
};

export default AddTransactionButton;
