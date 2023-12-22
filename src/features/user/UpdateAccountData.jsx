import { useState } from "react";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { useUser } from "../authentication/useUser";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import FileInput from "../../ui/FileInput";
import { useUpdateUser } from "./useUpdateUser";

function UpdateAccountData() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();
  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }
  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email Adress">
        <Input type="email" id="email" value={email} disabled />
      </FormRowVertical>
      <FormRowVertical label="Full Name">
        <Input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRowVertical>
      <Row style={{ justifyContent: "center" }} type="horizontal">
        <Button
          type="reset"
          onClick={handleCancel}
          size="medium"
          variation="secondary"
        >
          Cancel
        </Button>
        <Button size="medium" variation="primary">
          Update user
        </Button>
      </Row>
    </Form>
  );
}

export default UpdateAccountData;
