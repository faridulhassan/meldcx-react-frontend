export default function Button({ type = "button", className = "", processing, children }) {
    return (
        <button type={type} className={`items-center px-4 py-2  border border-transparent  font-semibold hover:bg-opacity-95 text-center text-xs  uppercase tracking-widest transition ease-in-out duration-150 ${processing && "opacity-25"} ` + className} disabled={processing}>
            {children}
        </button>
    );
}
