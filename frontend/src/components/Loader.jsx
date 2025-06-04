import {Loader as Spinner} from "lucide-react"

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Spinner className='animate-spin h-[30px] w-[30px]' />
    </div>
  )
}

export default Loader
