const Button = ({children, margin, width, height, padding, color, fontColor}) => (
    <div className={`mt-${margin} ${color} w-${width} h-${height} p-${padding} rounded-lg flex justify-center items-center cursor-pointer`}>
        <h5 className={`text-white text-sm font-medium ${fontColor}`}>
            {children}
        </h5>
    </div>
)

export default Button