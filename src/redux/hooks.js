import { useDispatch, useSelector } from 'react-redux';
import { store } from './store';

// Hook to dispatch actions
export const useAppDispatch = () => useDispatch();

// Typed selector hook to get data from the store
export const useAppSelector = useSelector;
