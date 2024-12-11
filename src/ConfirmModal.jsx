import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react';
import { useState } from 'react';

export default function ConfirmModal({
  style,
  buttonLabel,
  index,
  states,
  func,
  title,
  desc,
  body,
}) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={style} onClick={() => setIsOpen(true)}>
        {buttonLabel}
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">{title}</DialogTitle>
            <Description>{desc}</Description>
            <p>{body}</p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  func(index, states[0], states[1]);
                }}
              >
                {buttonLabel}
              </button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
