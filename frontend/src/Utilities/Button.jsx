export default function Button ({label, icon: Icon}) {

    return (
      <button className="flex bg-[var(--accent)] text-white mt-2 mx-auto rounded-lg items-center w-1/2 p-1 ">
            <Icon className="w-5 h-5 ml-4 " />
            <span>{label}</span>
      </button>

    )
}