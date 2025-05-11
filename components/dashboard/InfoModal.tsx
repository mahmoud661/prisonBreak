"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { X } from "lucide-react";

interface Officer {
  name: string;
  username: string;
  role: string;
  shift: string;
  status: string;
}

interface Prisoner {
  id: string;
  number: string;
  name: string;
  crime: string;
  entryDate: string;
  duration: number;
  isReleased: boolean;
  releaseDate: string | null;
  prison_id: string;
  cell_id: string;
}

type DetailItem = {
  label: string;
  value: string | number | boolean | null;
  formatter?: (value: any) => string;
};

interface InfoModalProps {
  title?: string;
}

export interface InfoModalRef {
  showModal: (data: Officer | Prisoner) => void;
  close: () => void;
}

const InfoModal = forwardRef<InfoModalRef, InfoModalProps>(
  ({ title = "Details" }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [detailData, setDetailData] = React.useState<
      Officer | Prisoner | null
    >(null);
    const [detailItems, setDetailItems] = React.useState<DetailItem[]>([]);

    const formatDate = (dateString: string): string => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    const formatBoolean = (value: boolean): string => {
      return value ? "Yes" : "No";
    };

    useImperativeHandle(ref, () => ({
      showModal: (data: Officer | Prisoner) => {
        setDetailData(data);

        if ("shift" in data) {
          setDetailItems([
            { label: "Name", value: data.name },
            { label: "Username", value: data.username },
            { label: "Role", value: data.role },
            { label: "Shift", value: data.shift },
            { label: "Status", value: data.status },
          ]);
        } else {
          // This is a prisoner
          setDetailItems([
            { label: "Prisoner ID", value: data.id },
            { label: "Number", value: data.number },
            { label: "Name", value: data.name },
            { label: "Crime", value: data.crime },
            {
              label: "Entry Date",
              value: data.entryDate,
              formatter: formatDate,
            },
            { label: "Sentence Duration (years)", value: data.duration },
            {
              label: "Released",
              value: data.isReleased,
              formatter: formatBoolean,
            },
            {
              label: "Release Date",
              value: data.releaseDate,
              formatter: (value) => (value ? formatDate(value) : "N/A"),
            },
            { label: "Prison ID", value: data.prison_id },
            { label: "Cell ID", value: data.cell_id },
          ]);
        }

        dialogRef.current?.showModal();
      },
      close: () => {
        dialogRef.current?.close();
      },
    }));

    return (
      <dialog
        ref={dialogRef}
        className="fixed p-0 inset-0 backdrop:bg-black backdrop:bg-opacity-50 backdrop:backdrop-blur-sm rounded-lg shadow-xl max-w-md w-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 mx-auto my-auto"
        onClose={() => setDetailData(null)}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-zinc-200 dark:border-zinc-700">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>
            <button
              onClick={() => dialogRef.current?.close()}
              className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6">
            {detailItems.map((item, index) => (
              <div
                key={index}
                className="mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-700 last:border-0 last:mb-0 last:pb-0"
              >
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">
                  {item.label}
                </div>
                <div className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                  {item.formatter
                    ? item.formatter(item.value)
                    : item.value !== null && item.value !== undefined
                    ? String(item.value)
                    : "N/A"}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end p-4 border-t border-zinc-200 dark:border-zinc-700">
            <button
              onClick={() => dialogRef.current?.close()}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

InfoModal.displayName = "InfoModal";

export default InfoModal;
