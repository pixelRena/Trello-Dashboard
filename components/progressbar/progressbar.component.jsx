export default function ProgressBar({max, value, type}) {
    return (
        <>
        <progress className="text-white w-full rounded-2xl" max={max} value={value}></progress>

        <style jsx>
            {`
                progress::-webkit-progress-bar { 
                    background-color: #fff; 
                    border-radius: 9999px;
                    padding: 2px;
                } 
                progress::-webkit-progress-value {
                    background-color: ${type === "good" ? "#71EB84" : type === "bad" ? "#FF5C5C" : "#2C3EDC"}; 
                    border-radius: 9999px;
                }
            `}
        </style>
        </>
    );
}