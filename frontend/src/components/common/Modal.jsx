import { Dialog } from "@headlessui/react";

const Modal = ({ open, setOpen, title, content }) => {
  return (
    <>
      <Dialog
        as="div"
        open={open}
        onClose={() => setOpen(false)}
        className="flex flex-col items-center justify-center bg-black/75 fixed inset-0 z-[500] w-screen h-screen"
      >
        <Dialog.Panel className="z-10 bg-white w-1/3 flex flex-col p-2 rounded-lg">
          <Dialog.Title className="w-full text-center text-xl">{title}</Dialog.Title>
          <div className="w-full h-full flex flex-col items-center mt-2">
            {content}
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Modal;
