import Shop from "../Shop";

function Home() {

    return (
        <div className="space-y-5">
            <div>
                <h1 className=" text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    আমাদের এখানে আপনারা সকল পকার মালামাল পেয়ে থাকবেন আমরা বাচ্ছা দের জন্য আমরা সকল কিছু করে থাকি
                </h1>
            </div>
            <Shop />
        </div>
    )
}

export default Home;