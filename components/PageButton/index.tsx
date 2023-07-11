import React from 'react';
import NextLink from 'next/link';
import styles from './PageButton.module.css'

const PageButton= ({ destination }) => (
  <NextLink href={destination} className={/*TU_MASZ_DAC_CSS*/ (styles.buttonStyle)}  />
);

export default PageButton