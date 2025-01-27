"use client";

import React, { useState } from "react";
import UserCard from "./usersCard";
import { useGetRegisterUsers } from "@/lib/hooks/api/queries";
import LoadingSkeleton from "@/components/loadingSkeleton";
import Pagination from "@/components/pagination";
import { useDeleteRegisteredUser } from "@/lib/hooks/api/mutations";
import Modal from "@/components/modal/modalConfirmation";
import { RegisteredUser } from "@/lib/types";
import EditUser from "./editUser";
import { showToast } from "@/lib/util";

const Page = () => {
  const { data: users, isPending: isLoadingUsers } = useGetRegisterUsers();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [userToEdit, setUserToEdit] = useState<RegisteredUser | null>(null);

  const { mutate: deleteUser } = useDeleteRegisteredUser();

  const handleDelete = (id: string) => {
    setUserIdToDelete(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (userIdToDelete) {
      setIsDeleting(true);
      deleteUser(userIdToDelete, {
        onSuccess: () => {
          setShowDeleteModal(false);
          showToast.success("User deleted successfully");
          setIsDeleting(false);
        },
        onError: (error) => {
          setIsDeleting(false);
          console.error(error.message);
        },
      });
    }
  };

  const handleCancelEdit = () => {
    setUserToEdit(null);
  };
  const handleEdit = (user: RegisteredUser) => {
    setUserToEdit(user);
  };

  if (userToEdit) {
    return <EditUser user={userToEdit} onCancel={handleCancelEdit} />;
  }

  return (
    <div className="md:py-14 py-10 px-4 md:px-8 space-y-6">
      {isLoadingUsers ? (
        <LoadingSkeleton count={5} />
      ) : (
        users?.map((user) => (
          <div key={user._id}>
            <UserCard
              key={user._id}
              user={user}
              edit={true}
              delete={true}
              onEdit={() => handleEdit(user)}
              onDelete={handleDelete}
            />
          </div>
        ))
      )}

      <Pagination
        currentPage={1}
        totalPages={8}
        onPageChange={(page) => console.log("Page changed to:", page)}
      />

      <Modal
        isOpen={showDeleteModal}
        isConfirmLoading={isDeleting}
        title="Are you sure you want to delete this user?"
        onConfirm={handleConfirmDelete}
        onClose={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

export default Page;
