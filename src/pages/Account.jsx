import UpdateAccountData from "../features/user/UpdateAccountData";
import UpdateUserPassword from "../features/user/UpdateUserPassword";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import FormLayout from "../ui/FormLayout";

function Account() {
  return (
    <>
      <FormLayout>
        <Row type="consistentPadding">
          <Heading as="h3">Account</Heading>
        </Row>
        <Row type="consistentPadding">
          <Heading as="h4">Update user data</Heading>
          <UpdateAccountData />
        </Row>

        <Row type="consistentPadding">
          <Heading as="h4">Update user password</Heading>
          <UpdateUserPassword />
        </Row>
      </FormLayout>
    </>
  );
}

export default Account;
