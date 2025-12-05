const SectionTilte = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-8" data-aos="fade-down">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-lg text-gray-600">{subtitle || ''}</p>
        </div>
    )
}

export default SectionTilte
