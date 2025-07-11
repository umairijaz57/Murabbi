import { CustomButton } from "./CustomBtn"

type BulletListProps = {
  list: {
    title: string
    content?: string
  }[]
  contentClass?: string
}

export const BulletList: React.FC<BulletListProps> = ({list, contentClass="text-lg"}) => {

  return (
    <div className="flex flex-col gap-4">
      {list.map(({title, content}) => 
        <div key={title} className="flex gap-2 items-start">
          <div className="size- mt-1">
            <CustomButton outerColor="#1c398e"/>
          </div>
          <div className={contentClass+ " py-1 w-full"} style={{borderBottomColor: "#0D47A1", borderBottomWidth: "2px"}}>
            {/* <p>{`${title}: ${content}`}</p> */}
            <p><strong>{title+(content ? ": " : "")}</strong>{content}</p>
          </div>
        </div>
      )}
    </div>
  )
}
