import cx from "classnames";
import * as React from "react";

import GenesisNftCard from "../GenesisNftCard";

import styles from "./index.module.scss";

import { GenesisKreationEntry } from "@/modules/kolours/types/Kolours";
import MessageBox from "@/modules/teiki-ui/components/MessageBox";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  value: GenesisKreationEntry[] | undefined;
  error: unknown;
};

export default function GenesisNftList({
  className,
  style,
  value,
  error,
}: Props) {
  if (error) {
    return (
      <div className={cx(styles.container, className)} style={style}>
        <MessageBox description="Error" />
      </div>
    );
  }

  if (!value) {
    return (
      <div className={cx(styles.container, className)} style={style}>
        <MessageBox description="Loading..." />
      </div>
    );
  }

  if (value && !value.length) {
    return (
      <div className={cx(styles.container, className)} style={style}>
        <MessageBox description="No Genesis Kreation NFTs minted" />
      </div>
    );
  }

  return (
    <div className={cx(styles.container, className)} style={style}>
      <div className={styles.grid}>
        {value.map((item, index) => (
          <GenesisNftCard key={index} value={item} />
        ))}
      </div>
    </div>
  );
}
