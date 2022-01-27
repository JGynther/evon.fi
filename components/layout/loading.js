import PageWrapper from "@components/layout/pagewrapper";
import { Title } from "@components/text";
import Spinner from "@components/spinner";

export default function Loading({ text }) {
  return (
    <PageWrapper>
      <div className="flex justify-center items-center">
        <div>
          {text && <Title>{text}</Title>}
          <span className="flex justify-center">
            <Spinner size="h-16 w-16" />
          </span>
        </div>
      </div>
    </PageWrapper>
  );
}
