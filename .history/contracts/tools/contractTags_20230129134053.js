const contractTags = (name, description, title, mimetype, owner) => [
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
      owner: owner,
    }),
  },
  { name: "Title", value: title },
  { name: "Description", value: description },
  { name: "Type", value: "Text" },
];

export default contractTags;
