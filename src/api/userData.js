const _users = [
    {"id": 1, "name": "hyd", "gender": "girl", "age": 23,"tenant":"ten1"},
    {"id": 2, "name": "cdz", "gender": "boy", "age": 22,"tenant":"ten1"},
    {"id": 3, "name": "cxd", "gender": "girl", "age": 0,"tenant":"ten2"}
]
const _tenants = [
    {"id": 1, "name": "ten1", "data1":["hyd","cdz"]},
    {"id": 2, "name": "ten2", "data1":["cxd"]},
]

export default {
    _users,
    _tenants
}