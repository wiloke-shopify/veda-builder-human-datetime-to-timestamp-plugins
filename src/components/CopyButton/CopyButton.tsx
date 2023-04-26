import { useEffect, useRef, useState } from 'react';
import styles from './CopyButton.module.css';
import { CopiedIcon } from './icons/CopiedIcon';
import { CopyIcon } from './icons/CopyIcon';
import { copyToClipboard } from './utils/copyToClipboard';

export interface CopyButtonProps {
  content: string;
}

export const CopyButton = ({ content }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const timeoutRef = useRef<number | undefined>();

  useEffect(() => {
    if (isCopied) {
      timeoutRef.current = window.setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isCopied]);

  return (
    <button
      className={styles.container}
      onClick={() => {
        setIsCopied(true);
        copyToClipboard(content);
      }}
    >
      {isCopied ? <CopiedIcon /> : <CopyIcon />}
      <span className={styles.text}>{isCopied ? 'Copied' : 'Copy'}</span>
    </button>
  );
};
