// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="pt-5">
        <div className="py-3 max-w-2xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div>
            <div className="px-3">
              <div className="flex">
                <img className="rounded-full h-12 w-12 mr-3" src="https://picsum.photos/id/1005/500" alt="Lorem Picsum" />
                <div className="">
                  <div className="font-medium text-black">Lorem Ipsum</div>
                  <p className="text-sm text-gray-500">Ontem às 9:05 PM</p>
                </div>
              </div>
              <p className="text-gray-500 pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel efficitur libero. In accumsan, lacus egestas suscipit mollis, lectus odio faucibus est, sed dictum est tortor quis risus. Aliquam imperdiet sodales turpis non malesuada. Sed at gravida quam, sit amet interdum turpis. Suspendisse id ex mi. Vivamus ligula arcu, varius in odio quis, sodales dapibus sem. Sed tincidunt augue sit amet porta laoreet. Vivamus porttitor urna at quam sodales, at tempor nulla iaculis. Mauris tristique condimentum elit, eu gravida tortor imperdiet non. Morbi fermentum sit amet mauris at blandit. Vestibulum at ex et ante ullamcorper maximus.

                Cras in ex sed quam viverra maximus eget vel arcu. Donec consequat, neque in suscipit dapibus, odio justo efficitur metus, in dictum metus velit sit amet ipsum. Praesent consectetur in lacus eget sollicitudin. Aliquam elit justo, egestas id tortor eget, laoreet tincidunt odio. Phasellus ac rhoncus turpis. Nullam nec congue dui. Maecenas rhoncus odio sit amet metus sollicitudin pharetra. Maecenas ut finibus diam. Vestibulum sit amet nisi ultricies, imperdiet velit sit amet, efficitur metus.
              </p>
            </div>
            <img className="pt-2" src="https://picsum.photos/1000/600" alt="Lorem Picsum" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
