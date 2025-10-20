export default function FloorItem({data, children}: {data: {bottom?: number, right?: number, size?: number, rotation?: number}, children: React.ReactNode}) {
    return <>
        <div 
            className="absolute"
            style={{
                ...(data.bottom !== undefined && {bottom: `${data.bottom * 1.2}vw`}),
                ...(data.right !== undefined && {right: `${data.right}vw`}),
                ...(data.size !== undefined && {width: `${data.size}px`}),
                ...(data.rotation !== undefined && {
                    transform: `
                        rotateX(50deg)
                        rotateZ(${data.rotation}deg)
                    `,
                    transformOrigin: "center",
                }),
            }}
        >
            {children}
        </div>
    </>
}
