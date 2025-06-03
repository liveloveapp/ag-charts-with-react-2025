import { useState } from 'react';
import { getData } from '../constants/data.ts';

export function useData() {
  const [data] = useState(getData());

  return data;
}
