'use client';

import { Button } from "@/components/ui/button";

export function ProfileForm({ user }: any) {

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };
    console.log( typeof body.age )
    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    if (res.headers.get('content-type')?.includes('application/json')) {
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h2>Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={user?.name ?? ''} />
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" defaultValue={user?.email ?? ''} />
        </div>
        <div>
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          cols={3}
          rows={1}
          defaultValue={user?.bio ?? 'bioo'}
        ></textarea>
        </div>
        <div>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" defaultValue={user?.age ?? 0} />
        </div>
        <label htmlFor="image">Profile Image URL</label>
        <input type="text" name="image" defaultValue={user?.image ?? ''} />

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}