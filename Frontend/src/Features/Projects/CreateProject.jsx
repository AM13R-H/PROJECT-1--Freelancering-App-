import { useState } from 'react';
import RHFSelect from '../../Ui/RHFSelect';
import Text_Feild from '../../Ui/Text_Feild';
import { useForm } from 'react-hook-form';
import { TagsInput } from 'react-tag-input-component';
import DatePickerField from '../../Ui/DatePickerFeild';
import useCategories from '../../Hooks/useCategories';
import useCreateProject from './useCreateProject';
import Loader from '../../Ui/Loader';
import useEditProject from './useEditProject';

function CreateProject({ onClose, projectToEdit = {} }) {
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || null));
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    tags: prevTags,
    deadline,
  } = projectToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });
  const { isLoading, categories, transformedCategories } = useCategories();
  const { project, error, isCreatingProject, createProject } = useCreateProject();
  const { isEditingProject, editProject } = useEditProject();

  const submit = (data) => {
    const newProject = { ...data, tags, deadline: new Date(date) };

    if (isEditSession) {
      console.log(newProject);
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        },
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          reset();
          onClose();
        },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <span className="backGround"></span>
      <h2 className="header">Create your project</h2>
      <Text_Feild
        name="title"
        label="title"
        register={register}
        validationSchema={{
          required: 'Requierd!',
          minLength: {
            value: 10,
            message: 'this is invalid!',
          },
        }}
        type="text"
        requierd
        errors={errors}
      />
      <Text_Feild
        name="description"
        label="Description"
        register={register}
        validationSchema={{
          required: 'Requierd!',
          minLength: {
            value: 10,
            message: 'this is invalid!',
          },
          maxLength: {
            value: 100,
            message: 'this is enougth',
          },
        }}
        type="text"
        inputStyle="textField__input"
        labelStyle="label__input"
        requierd
        errors={errors}
      />
      <Text_Feild
        name="budget"
        label="Budget"
        register={register}
        validationSchema={{
          required: 'Requierd!',
          minLength: {
            value: 3,
            message: 'this is invalid!',
          },
        }}
        type="number"
        inputStyle="textField__input"
        labelStyle="label__input"
        requierd
        errors={errors}
      />
      <RHFSelect
        label="Category"
        name="category"
        register={register}
        errors={errors}
        options={categories}
        validationSchema={{
          requierd: 'you must choose categories!',
        }}
      />
      <div>
        <label className="text-secondary-0">Tags</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField label="deadline" date={date} setDate={setDate} />
      {isCreatingProject ? (
        <Loader />
      ) : (
        <button type="submit" className="verify__btn">
          Create project
        </button>
      )}
    </form>
  );
}

export default CreateProject;
