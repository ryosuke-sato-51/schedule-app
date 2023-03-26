import React, { ReactElement, ReactNode } from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export type ModalProps = {
  triggerButton: (onClose: () => void) => ReactElement;
  header?: string;
  children: ReactNode;
};

export const Modal = ({ triggerButton, header, children }: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {triggerButton(onOpen)}
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={"24px 16px"}>
          {header && (
            <ModalHeader mb={"16px"} p={"0"}>
              {header}
            </ModalHeader>
          )}
          <ModalCloseButton />
          <ModalBody p={"0"}>{children}</ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  );
};
