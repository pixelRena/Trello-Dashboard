import { Modal, Select, Label, Button } from "flowbite-react";
import { BoardContext } from "@/context/board.context";
import { useContext } from "react";

export default function BoardDropdownModal() {
    const { isModalOpen, setIsModalOpen } = useContext(BoardContext);

    return(
        <Modal
            className="w-full h-full top-[15%] !bg-transparent lg:hidden"
            show={isModalOpen}
            onClose={() => setIsModalOpen(!isModalOpen)}
        >
            <Modal.Header className="text-zinc-800">
            Board View Settings
            </Modal.Header>
            <Modal.Body className="text-zinc-800 p-5">
                <div className="space-y-6">
                    <div id="select-board">
                        <div className="mb-2 block">
                            <Label
                            className="dark:text-zinc-800"
                            htmlFor="boards"
                            value="Select a board:"
                            />
                        </div>
                        <Select
                            id="boards"
                        >
                            <option>
                            Trellometrics
                            </option>
                            <option>
                            Grant Tracking
                            </option>
                            <option>
                            Design Systems Checklist
                            </option>
                            <option>
                            Kanban
                            </option>
                            <option>
                            Remote Team Hub
                            </option>
                        </Select>
                    </div>
                    <div id="select-list">
                        <div className="mb-2 block">
                            <Label
                            className="dark:text-zinc-800"
                            htmlFor="lists"
                            value="Select a list:"
                            />
                        </div>
                        <Select
                            id="lists"
                        >
                            <option>
                            Doing
                            </option>
                            <option>
                            To Do
                            </option>
                            <option>
                            Testing
                            </option>
                            <option>
                            Completed
                            </option>
                            <option>
                            Touch Ups
                            </option>
                        </Select>
                    </div>
                    <div id="select-card">
                        <div className="mb-2 block">
                            <Label
                            className="dark:text-zinc-800"
                            htmlFor="cards"
                            value="Select a card:"
                            />
                        </div>
                        <Select
                            id="cards"
                        >
                            <option>
                            Fix UI Glitch
                            </option>
                            <option>
                            Reusable Components
                            </option>
                            <option>
                            Loading SVG
                            </option>
                            <option>
                            Bug with API fetch
                            </option>
                        </Select>
                    </div>
                    <Button className="w-full">Update View</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}