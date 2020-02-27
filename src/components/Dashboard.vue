<template>
    <div id="dashboardItems" class="m-10 flex flex-row justify-center">
        <div class="flex flex-col w-1/4">
            <div id="projectStats" class="m-4 pt-8 card">
                <div class="p-8 flex flex-row justify-center">
                    <cld-image class="pt-2" publicId="flippinnotes/projectMoney.png" secure="true">
                        <cld-transformation width="50" crop="scale"/>
                    </cld-image>
                    <div class="mx-10 flex flex-col">
                        <div class="text-3xl text-purple-700">$65,000</div>
                        <div>in potential profit</div>
                    </div>
                </div>
            </div>
            <div id="projectMonthly" class="m-2 pt-2 card">
                <div class="p-4 flex flex-row justify-center">
                    <cld-image class="pt-2" publicId="flippinnotes/sortof.png" secure="true">
                        <cld-transformation width="50" crop="scale"/>
                    </cld-image>
                    <div class="mx-10 flex flex-col">
                        <div class="text-3xl text-orange-700">$15,000</div>
                        <div>Last Month</div>
                    </div>
                </div>
                <div class="p-4 flex flex-row justify-center">
                    <cld-image class="pt-2" publicId="flippinnotes/good.png" secure="true">
                        <cld-transformation width="50" crop="scale"/>
                    </cld-image>
                    <div class="mx-10 flex flex-col">
                        <div class="text-3xl text-green-700">$23,000</div>
                        <div>This Month</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-1/2 ">
            <div id="projectList" class="card">
                <div id="projectHeader" class="cardHeader">

                    <div class="p-4">
                        <cld-image publicId="flippinnotes/projects.png" secure="true">
                            <cld-transformation width="50" crop="scale"/>
                        </cld-image>
                    </div>
                    <span class="mt-4 p-2 mr-2 font-bold text-xl text-gray-600 ">
                       Project Status
                </span>

                </div>
                <div id="projectTable" class="dashTable">
                    <div class="flex flex-col">
                        <div class="-my-2 pt-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-b-lg border-b border-gray-200">
                                <table class="min-w-full">
                                    <thead>
                                    <tr>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                    </tr>
                                    </thead>
                                    <tbody class="bg-white">
                                    <tr>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded-full"
                                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                         alt=""/>
                                                </div>
                                                <div class="ml-4">
                                                    <div class="text-sm leading-5 font-medium text-gray-900">Bernard
                                                        Lane
                                                    </div>
                                                    <div class="text-sm leading-5 text-gray-500">
                                                        bernardlane@example.com
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="text-sm leading-5 text-gray-900">Director</div>
                                            <div class="text-sm leading-5 text-gray-500">Human Resources</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            Owner
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <a href="#"
                                               class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded-full"
                                                         src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                         alt=""/>
                                                </div>
                                                <div class="ml-4">
                                                    <div class="text-sm leading-5 font-medium text-gray-900">Bernard
                                                        Lane
                                                    </div>
                                                    <div class="text-sm leading-5 text-gray-500">
                                                        bernardlane@example.com
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="text-sm leading-5 text-gray-900">Director</div>
                                            <div class="text-sm leading-5 text-gray-500">Human Resources</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            Owner
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <a href="#"
                                               class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded-full"
                                                         src="https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                         alt=""/>
                                                </div>
                                                <div class="ml-4">
                                                    <div class="text-sm leading-5 font-medium text-gray-900">Bernard
                                                        Lane
                                                    </div>
                                                    <div class="text-sm leading-5 text-gray-500">
                                                        bernardlane@example.com
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="text-sm leading-5 text-gray-900">Director</div>
                                            <div class="text-sm leading-5 text-gray-500">Human Resources</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Inactive
              </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            Owner
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <a href="#"
                                               class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-no-wrap">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded-full"
                                                         src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                         alt=""/>
                                                </div>
                                                <div class="ml-4">
                                                    <div class="text-sm leading-5 font-medium text-gray-900">Bernard
                                                        Lane
                                                    </div>
                                                    <div class="text-sm leading-5 text-gray-500">
                                                        bernardlane@example.com
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap">
                                            <div class="text-sm leading-5 text-gray-900">Director</div>
                                            <div class="text-sm leading-5 text-gray-500">Human Resources</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Inactive
              </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Owner
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                            <a href="#"
                                               class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="recentExpenses" class="card">
                <div id="expensesHeader" class="cardHeader">
                    <div class=" p-4 ">
                        <cld-image publicId="flippinnotes/expenses.png" secure="true">
                            <cld-transformation width="65" crop="scale"/>
                        </cld-image>
                    </div>
                    <span class="mt-2 p-2 mr-2 font-bold text-xl text-gray-600">
                       Top Expenses
                </span>
                </div>
                <div id="expensesTable" class="dashTable">
                    <div class="flex flex-col">
                        <div class="-my-2 pt-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-b-lg border-b border-gray-200">
                                <table class="min-w-full">
                                    <thead>
                                    <tr>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="bg-white">
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                            Bernard Lane
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Director, Human Resources
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            bernardlane@example.com
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Owner
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                            Bernard Lane
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Director, Human Resources
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            bernardlane@example.com
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Owner
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr class="bg-white">
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                            Bernard Lane
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Director, Human Resources
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            bernardlane@example.com
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Owner
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                            Bernard Lane
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Director, Human Resources
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            bernardlane@example.com
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Owner
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
                                        </td>
                                    </tr>
                                    <tr class="bg-white">
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                            Bernard Lane
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Director, Human Resources
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            bernardlane@example.com
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                            Owner
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="profitabilityChart">

            </div>
            <div id="openTaskItems">

            </div>
            <div id="alerts">

            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>
    .card {
        @apply mx-4 mt-8 rounded-lg shadow-xl;
    }

    .tableRow {
        @apply border-b px-2 py-2 text-center;
    }

    .dashTable {
        @apply py-2;
    }

    .cardHeader {
        @apply mb-2 flex flex-row justify-between bg-gray-100 rounded-t-lg;
    }

</style>
ACORNtea17!#
