const RecapSection:React.FC = () => {
    return(
        <section className="bg-white pt-4 pb-12">
            <div className="mt-12 text-center">
            <h3 className="text-6xl font-bold text-grey-900 m-4">Juneteenth 2023 Recap</h3>
            <div className="aspect-video mx-4 rounded-lg overflow-hidden">
                <iframe
                src="https://www.youtube.com/embed/5iTGaC51kwQ?si=RuplTlZBaC9RVlKe"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full shadow-md"
                ></iframe>
            </div>
            </div>
        </section>
    );
}

export default RecapSection;