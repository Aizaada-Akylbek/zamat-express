import { useContext } from 'react';
import { GetContext } from '../../contexts/AuthContext';

function useData() {
	return useContext(GetContext);
}

export default useData;
