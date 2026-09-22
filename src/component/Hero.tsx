
import Logo from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div>
    
    <section className="bg-white flex items-center">
  
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
              Build Your Ideal
              <br />

              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-7 max-w-xl md:text-xl text-slate-500">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your next project.</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-md hover:shadow-lg hover:scale-120 hover:from-orange-600 hover:via-pink-600 hover:to-pink-600">Explore Technologies</button>

              <button className="rounded-lg border border-slate-200 bg-white  px-8 py-3 text-sm font-medium text-slate-600">
                Learn More</button>
            </div>
          </div>

          <div>
            
              <img src={Logo} alt=""/>
            
          </div>

        </div>
      </div>
    </section>
    </div>

    );
};

export default Hero;