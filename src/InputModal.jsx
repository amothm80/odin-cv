import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react';
import { useState } from 'react';

export default function InputModal({
  style,
  buttonLabel,
  states,
  func,
  title,
  fields,
  labels,
  types,
}) {
  let [isOpen, setIsOpen] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    let data = {};
    for (const pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    func(data, states[0], states[1]);
    setIsOpen(false);
  }

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
        <form method="dialog" onSubmit={handleSubmit}>
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-slate-100 p-12 rounded-lg shadow-lg">
              <DialogTitle className="font-bold">{title}</DialogTitle>
              <Description></Description>
              <div className="grid grid-cols-1">
                {fields.map((el) => {
                  return (
                    <>
                      <label className='font-thin mt-4'>{labels[el]}:</label>
                      <input type={types[el]} name={el} className='border-2'></input>
                    </>
                  );
                })}
              </div>
              <div className="flex gap-4">
                <button className="button add" type="submit">
                  {buttonLabel}
                </button>
                <button className="button add" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </form>
      </Dialog>
    </>
  );
}
