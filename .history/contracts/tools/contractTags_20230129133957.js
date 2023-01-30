const contractTags = (name, description, mimetype) => [
  { name: "Content-Type", value: mimetype },
  { name: "App-Name", value: "SmartWeaveAtomicNftContract" },
  { name: "App-Version", value: "0.1.0" },
  {
    name: "Contract-Src",
    value: "X6FREUVChm7KpDhJjSaUfN6z6oIF3byZISqISPCyPGs",
  },
  {
    name: "Init-State",
    value: JSON.stringify({
      owner: "_ei0RuqVv5j6oVIOXoMSGOrWOOzGMrhiWnR3AS0EOhM",
    }),
  },
  { name: "Title", value: "Asset" },
  { name: "Description", value: "Description" },
  { name: "Type", value: "Text" },
];

export default contractTags;
