
// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [fullName, setFullName] = useState('');

//   const firstNameOptions = ['John', 'Jane', 'Michael', 'Emily', 'Chris'];
//   const lastNameOptions = ['Smith', 'Doe', 'Johnson', 'Brown', 'Williams'];

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFullName(`${firstName} ${lastName}`);
//   };

//   const filterOptions = (options, query) => {
//     return options.filter(option => option.toLowerCase().includes(query.toLowerCase()));
//   };

//   return (
//     <div className="App">
//       <h1>Full Name Display</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             value={firstName}
//             onChange={handleFirstNameChange}
//             placeholder="Search First Name"
//             list="firstNameOptions"
//           />
//           <datalist id="firstNameOptions">
//             {filterOptions(firstNameOptions, firstName).map((name) => (
//               <option key={name} value={name} />
//             ))}
//           </datalist>
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input
//             type="text"
//             value={lastName}
//             onChange={handleLastNameChange}
//             placeholder="Search Last Name"
//             list="lastNameOptions"
//           />
//           <datalist id="lastNameOptions">
//             {filterOptions(lastNameOptions, lastName).map((name) => (
//               <option key={name} value={name} />
//             ))}
//           </datalist>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {fullName && <h2>Full Name: {fullName}</h2>}
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert('Please fill out this field');
      return;
    }
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Enter First Name"
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Enter Last Name"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
};

export default App;



