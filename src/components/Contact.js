const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">CONTACT US</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border-black border-2 p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border-black border-2 p-2 m-2"
        />
        <button className="border-black border-2 p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
