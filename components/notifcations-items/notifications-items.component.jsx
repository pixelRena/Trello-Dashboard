export default function NotificationsItems() {
    return(
        <>
            <header className="text-white text-2xl pb-5">Notification Center (10)</header>
            <div className="text-black font-light">
                <div className="bg-white/[.80] p-3 m-1 rounded-xl backdrop-blur-3xl hover:bg-white">
                <span className="text-neutral-700 text-md block font-medium">Card Update</span>
                Aya has updated the card &quot;Fix UI Glitch&ldquo;
                </div>
                <div className="bg-white/[.80] p-3 m-1 rounded-xl backdrop-blur-3xl hover:bg-white">
                <span className="text-neutral-700 text-md block font-medium">Card Status</span>
                5 Cards are not assigned to anyone.
                </div>
            </div>
        </>
    );
}