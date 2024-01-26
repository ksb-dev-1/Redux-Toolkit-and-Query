import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AsyncThunk, SerializedError } from "@reduxjs/toolkit";

// store
import { AppDispatch } from "@/store";

export function useThunk(thunk: AsyncThunk<any, any, AsyncThunkConfig>) {
  const dispatch = useDispatch<AppDispatch>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isFetchingError, setIsFetchingError] =
    useState<null | SerializedError>(null);

  const runThunk = useCallback(
    (arg?: User) => {
      setIsFetching(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((error) => setIsFetchingError(error as SerializedError))
        .finally(() => setIsFetching(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isFetching, isFetchingError] as const;
}

//console.log(dispatch(thunk())); // each dispatch has request id
