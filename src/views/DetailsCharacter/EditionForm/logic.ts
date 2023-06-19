import { useCallback } from 'react'

const useLogic = () => {
  const handleOnEdit = useCallback(
    (values: { name: string; species: string; status: string }) => {
      console.log({ values })
    },
    []
  )

  return { handleOnEdit }
}

export default useLogic
