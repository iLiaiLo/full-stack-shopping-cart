const useQueryChange = ({ setFormData }) => {
  const handleNameChange = (e) => {
    setFormData((prewData) => {
      return { ...prewData, title: e.target.value };
    });
  };
  const handleCategoryChange = (e) => {
    setFormData((prewData) => {
      return { ...prewData, category: e.target.value };
    });
  };

  return { handleNameChange, handleCategoryChange };
};

export default useQueryChange;
