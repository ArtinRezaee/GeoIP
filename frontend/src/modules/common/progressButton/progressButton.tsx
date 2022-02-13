import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { makeStyles } from '../../../makeStyles';

type ProgressButtonProps = {
  disabled: boolean;
  loading: boolean;
  circularProgressSize: number;
  children: React.ReactNode;
  onClick: (...args: unknown[]) => void;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
};

const useStyles = makeStyles()(() => ({
  root: {
    position: 'relative',
  },
  circularProgress: {
    position: 'absolute',
    top: 'calc(50% - 12px)',
    left: 'calc(50% - 12px)',
  },
}));

export const ProgressButton: React.FC<ProgressButtonProps> = ({
  disabled,
  loading,
  circularProgressSize,
  children,
  onClick,
  variant = 'contained',
  size = 'medium',
  startIcon,
}: ProgressButtonProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Button
        onClick={onClick}
        color="primary"
        size={size}
        disabled={disabled}
        variant={variant}
        startIcon={startIcon}>
        {children}
      </Button>
      {loading && (
        <CircularProgress
          size={circularProgressSize}
          className={classes.circularProgress}
        />
      )}
    </div>
  );
};

export default ProgressButton;
