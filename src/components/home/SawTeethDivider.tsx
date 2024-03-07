const SawTeethDivider = () => {
    return (
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full h-6 bg-white">
            <svg className="w-full h-3 text-gray-900 fill-current" preserveAspectRatio="none">
              <pattern id="sawTeeth" x="0" y="0" width="40" height="12" patternUnits="userSpaceOnUse">
                <polygon points="0,0 20,12 40,0"></polygon>
              </pattern>
              <rect width="100%" height="100%" fill="url(#sawTeeth)"></rect>
            </svg>
          </div>
        </div>
      </div>
    );
  };

export default SawTeethDivider;