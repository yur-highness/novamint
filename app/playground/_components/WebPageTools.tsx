import { Button } from "@/components/ui/button"
import { Monitor, TabletSmartphone } from "lucide-react"


const WebPageTools = ({selectedScreenSize,setSelectedScreenSize}:any) => {

  return (
    <div className="p-2 shadow rounded-xl absolute top-9 right-68">
      <div
      className="flex gap-2 bg-white w-23.5 rounded-2xl">
        <Button 
        className={`${selectedScreenSize ? 'border-primary':null} hover:bg-gray-400`}
        variant={"ghost"} 
        onClick={()=>selectedScreenSize('web')}>
          <Monitor />
          </Button>
         <Button 
        className={`${selectedScreenSize ? 'border-primary':null}`}
         variant={"ghost"} 
         onClick={()=>selectedScreenSize('mobile')}>
          <TabletSmartphone />
          </Button>
        </div>
    </div>
  )
}

export default WebPageTools