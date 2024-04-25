import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
  bio: string | null;
}
export default function UserCard({ id, name, image, bio }: Props) {
  return (
    <Card>
      <CardHeader>
        <Image
          src={image ?? "/mememan.webp"}
          alt={`${name}'s profile`}
          width={200}
          height={200}
          // className={styles.cardImage}
        />
        <CardTitle>
          <Link href={`/users/${id}`}>{name}</Link>
        </CardTitle>
        <CardDescription>{bio}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
      <p className="text-xs">{`you are the best ${name}`}</p>
      </CardFooter>
    </Card>
  );
}
