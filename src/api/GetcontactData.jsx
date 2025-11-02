const getContactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default getContactData;
